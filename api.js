import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDgUlRCq6G_ou5NdD3ONG2IUC5yIAFRT8g",
  authDomain: "vanlife-c1a10.firebaseapp.com",
  projectId: "vanlife-c1a10",
  storageBucket: "vanlife-c1a10.appspot.com",
  messagingSenderId: "78599168796",
  appId: "1:78599168796:web:a78017ae1745fbe6be50d9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansRef = collection(db, "van");

export async function getVans() {
    const snapshot = await getDocs(vansRef);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans;
}

export async function getVan(vanId) {
    const docRef = doc(db, "van", vanId);
    const docSnap = await getDoc(docRef);
    return {
        ...docSnap.data(),
        id: docSnap.id
    }
}

export async function getHostVans() {
    const q = query(vansRef, where("hostId", "==", "123"));
    const snapshot = await getDocs(q);
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }));
    return vans;
}

export async function getHostVan(vanId) {
    const docRef = doc(db, "van", vanId);
    const docSnap = await getDoc(docRef);
    return {
        ...docSnap.data(),
        id: docSnap.id
    }
}

/// Old code
// export async function getVans(vanId) {
//     const response = await fetch("/api/vans" + (vanId ? `/${vanId}` : ""));
//     console.log(response);
//     if (!response.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
//     const data = await response.json();
//     return data.vans;
// }

// export async function getHostVans(vanId) {
//     const response = await fetch("/api/host/vans" + (vanId ? `/${vanId}` : ""));
//     console.log(response);
//     if (!response.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: response.statusText,
//             status: response.status
//         }
//     }
//     const data = await response.json();
//     return data.vans;
// }

export async function login(creds) {
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(creds)
    })
    const data = await response.json();
    if (!response.ok) {
        throw {
            message: data.message, 
            statusText: response.statusText,
            status: response.status
        }
    }
    return data;
}