
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Register = () => {

     const { register, handleSubmit, reset, formState: { errors } } = useForm();
     const { createUser, updateUserProfile, googleSignIn, githubSignIn } = useContext(AuthContext);
     const navigate = useNavigate();

     const handleGoogleUser = () => {
          googleSignIn()
               .then(result => {
                    navigate('/')

                    console.log(result);
               })
               .catch(err => console.log(err.message))
     }

     const handleGithubUser = () => {
          githubSignIn()
               .then(result => {
                    console.log(result.user);
                    navigate('/')
               })
               .catch(error => {
                    console.log(error.message);
               })
     }



     const onSubmit = data => {

          createUser(data.email, data.password)
               .then(result => {


                    const image = data.image[0]

                    const formData = new FormData()
                    formData.append('image', image)

                    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

                    fetch(url, {
                         method: 'POST',
                         body: formData,
                    })
                         .then(res => res.json())
                         .then(imageData => {
                              const imageUrl = imageData.data.display_url;
                              updateUserProfile(data.name, imageUrl)
                                   .then(result => {
                                        console.log(result);

                                   })
                                   .catch(err => {
                                        console.log(err.message);
                                   })
                         })
                         .catch(err => {
                              console.log(err.message);
                              toast.error(err.message)
                         })




                    const loggedUser = result.user;
                    console.log(loggedUser);

                    updateUserProfile(data.name, data.photoURL)
                         .then(() => {
                              const saveUser = { name: data.name, email: data.email }
                              fetch('https://best-course-server.vercel.app/users', {
                                   method: 'POST',
                                   headers: {
                                        'content-type': 'application/json'
                                   },
                                   body: JSON.stringify(saveUser)
                              })
                                   .then(res => res.json())
                                   .then(data => {
                                        if (data.insertedId) {
                                             reset();
                                             Swal.fire({
                                                  position: 'top-end',
                                                  icon: 'success',
                                                  title: 'User created successfully.',
                                                  showConfirmButton: false,
                                                  timer: 1500
                                             });
                                             navigate('/');
                                        }
                                   })

                              navigate('/');

                         })
                         .catch(error => console.log(error))
               })
     };

     return (
          <div>
               <Helmet>
                    <title>Best Course | REGISTER </title>
               </Helmet>
               <div className="hero min-h-screen">
                    <div className="hero-content">
                         <div className="card shadow-2xl bg-white text-black w-96 mt-20">
                              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered border-[#00FF84]" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                   </div>
                                   <div>
                                        <label htmlFor='image' className='block mb-2 text-sm'>
                                             Select Image:
                                        </label>
                                        <input {...register("image", { required: true })}
                                             required
                                             type='file'
                                             id='image'
                                             name='image'
                                             accept='image/*'
                                        />
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered border-[#00FF84]" />
                                        {errors.email && <span className="text-red-600">Email is required</span>}
                                   </div>
                                   <div className="form-control">
                                        <label className="label">
                                             <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password"  {...register("password", {
                                             required: true,
                                             minLength: 6,
                                             maxLength: 20,
                                             pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="input input-bordered border-[#00FF84]" />
                                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                        <label className="label">
                                             <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                        </label>
                                   </div>
                                   <div className="form-control mt-6">
                                        <input className="fill-btn" type="submit" value="Sign Up" />
                                   </div>

                                   <button className='button ' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>


                              </form>

                              <p className="p-3"><small>Already have an account <Link to="/login">Login</Link></small></p>
                         </div>
                    </div>
               </div>
          </div>
     );
};



export default Register;
