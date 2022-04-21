import { doc, setDoc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from '../../config/firebase';
import { IAuth, IProfile } from "../types";
export const changeProfile = async (user: IAuth, data: IProfile) => {
    try {
        await setDoc(doc(db, "users", user.uid), data);
        toast.success('Updated successfuly', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        return data;
    } catch (err: any) {
        return;
    }
}
// export const getProfile = async (uid: string) => {
//     try {
//       const docRef = doc(db, `users/${uid}`)

//       const docSnap = await getDoc(docRef);

//       if(docSnap.exists())
//         return docSnap.data()

//     } catch (err: any) {
//       return toast.error(err.message)
//     }
//   }
export const getProfile = async (uid: string) => {
    try {
        const docRef = doc(db, `users/${uid}`);

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            return docSnap.data();
        }
    } catch (error: any) {
        return toast.error(error.message);
    }
}