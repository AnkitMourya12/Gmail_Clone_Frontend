import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const useGetAllEmails = () => {
    const dispatch = useDispatch();
    const {emails} = useSelector(store=>store.app);
    useEffect(() => {
        const fetchEmails = async () => {
            try {

                const res = await axios.get("https://gmail-clone-backend-pv9p.onrender.com/api/v1/email/getallemails", {
                    withCredentials: true
                });
                dispatch(setEmails(res.data.emails));

            } catch (error) {
                console.log(error);
            }
        }
        fetchEmails();
    }, []);
};
export default useGetAllEmails;