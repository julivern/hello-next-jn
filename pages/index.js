import Link from "next/link";
import Header from "../comps/Header";

// const Index = () => (
//     <div>
//         <Link href="/about">
//             <a title="About Page">About Page</a>
//         </Link>
//         <p>Hello Next.js</p>
//     </div>
// );

// export default Index;

export default function Index() {
    return (
        <div>
            <Header />
            <p>Hello Next.js</p>
        </div>
    );
}