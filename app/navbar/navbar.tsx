export default function NavBar() {
    return (
        <>
            <div>
                <div className="md:text-lg text-sm font-mono font-bold space-y-10 bg-bluesuit text-white h-screen w-full md:p-4 p-2 flex flex-col justify-center">
                    <button className="border hover:bg-yellowlight p-2 rounded-md">Home</button>
                    <button className="border hover:bg-treegreen p-2 rounded-md">Bio</button>
                    <button className="border hover:bg-treegreen p-2 rounded-md">Media</button>
                    <button className="border hover:bg-treegreen p-2 rounded-md">Events</button>
                    <button className="border hover:bg-treegreen p-2 rounded-md">Contact</button>
                </div>
            </div>
        </>
    )
}