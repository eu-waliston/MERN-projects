FIRBASE INFOS CONNECT

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeVhIIIqMoldFlzIxjoMlg7YFf5_XUGiM",
  authDomain: "dating-app-mern-a057d.firebaseapp.com",
  projectId: "dating-app-mern-a057d",
  storageBucket: "dating-app-mern-a057d.appspot.com",
  messagingSenderId: "412274699127",
  appId: "1:412274699127:web:ff001d49df50f0cf680f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




Implantar no Firebase Hosting

É possível implantar agora ou depois. Para implantar agora, abra uma janela de terminal e navegue ou crie um diretório raiz a partir do seu app da Web. Faça login no Google
 
>> firebase login

Iniciar seu projeto

Execute este comando no diretório raiz do seu app:

>> firebase init

Quando tudo estiver pronto, implante seu app da Web

Inclua seus arquivos estáticos (por exemplo, HTML, CSS, JS) no diretório de implantação do app (o padrão é "público"). Depois, execute este comando a partir do diretório raiz do app:

>> firebase deploy