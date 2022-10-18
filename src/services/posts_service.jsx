import { fb } from "../firebase_config";
import "firebase/compat/firestore";

export async function pushPost(payload, uid) {
    const database = fb.firestore().collection("posts").doc(uid);

    // export async function pushFavorite(payload, uid) {
    //     const database = fb.firestore().collection("posts").doc(uid);
    //     const document = await database.get();

    //     await database.update({
    //         isFavorite: !payload,
    //     })

    const document = await database.get();
    if (document.exists) {
        await database.update({
            type: payload.type,
            sex: payload.sex,
            breed: payload.breed,
            color: payload.color,
            features: payload.features,
            description: payload.description,
            location: payload.location,
            file: payload.file,
            phone: payload.phone,
            email: payload.email,
            facebook: payload.facebook,
            found: payload.found,
            date: Date.now(),
        });
    } else {
        await database.set(
            {
                type: payload.type,
                sex: payload.sex,
                breed: payload.breed,
                color: payload.color,
                features: payload.features,
                description: payload.description,
                location: payload.location,
                file: payload.file,
                phone: payload.phone,
                email: payload.email,
                facebook: payload.facebook,
                found: payload.found,
                date: Date.now(),
            },
            { merge: true }
        );
    }
}
// export async function pushTextPost(payload, uid) {
//   const database = fb.firestore().collection("text-posts").doc(uid);

//   const document = await database.get();
//   if (document.exists) {
//     await database.update({
//       content: payload.content,
//     });
//   } else {
//     await database.set({ content: payload.content}, { merge: true });
//   }
// }
