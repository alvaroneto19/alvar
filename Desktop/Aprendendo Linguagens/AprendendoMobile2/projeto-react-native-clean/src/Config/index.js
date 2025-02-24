import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDAjK94fh94PQJbj3DzYMXzev7b1HbwpUQ",
  authDomain: "ifpe-agro-app.firebaseapp.com",
  projectId: "ifpe-agro-app",
  storageBucket: "ifpe-agro-app.appspot.com",
  messagingSenderId: "876576384484",
  appId: "1:876576384484:web:5c41b2431e45bfe4f113f1"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore
const db = getFirestore(app);

// Função para adicionar um novo documento ao Firestore
const addData = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      firstName: "John",
      lastName: "Doe",
      age: 30
    });
    console.log("Documento adicionado com ID: ", docRef.id);
  } catch (e) {
    console.error("Erro ao adicionar documento: ", e);
  }
};

// Função para ler dados do Firestore
const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  } catch (e) {
    console.error("Erro ao obter documentos: ", e);
  }
};

// Chamar as funções para adicionar e obter dados
addData();  // Adiciona dados
getData();  // Lê os dados
