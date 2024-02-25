import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

export default function App() {
    return (
        <div
            className="flex flex-col justify-between h-full w-full text-lg gap-16"
        >
            <Header />
            <Main />
            <Footer />

        </div>
    )
}