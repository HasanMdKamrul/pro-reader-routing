import { createBrowserRouter } from "react-router-dom";
import About from '../components/About';
import BookDetails from '../components/BookDetails';
import Books from '../components/Books';
import ErrorPage from '../components/ErrorPage';
import Home from '../components/Home';
import Main from "../layouts/Main";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children:[
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: '/home',
                        element: <Home/>
                    },
                    {
                        path: '/about',
                        element: <About/>
                    },
                    {
                        path: '/books',
                        element: <Books/>,
                        loader: ()=> fetch(`https://api.itbook.store/1.0/new`)
                    },
                    {
                        path: '/book/:bookId',
                        element: <BookDetails/>,
                        loader: ({params:{bookId}})=> fetch(`https://api.itbook.store/1.0/books/${bookId}`)
                    },
                ],
            },
        ]
    }
])