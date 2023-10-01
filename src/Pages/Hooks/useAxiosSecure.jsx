import axios from "axios";

const axiosSecure = axios.create({
     baseURL: `https://best-course-server.vercel.app/`
})

const useAxiosSecure = () => {
     return [axiosSecure]
}

export default useAxiosSecure;