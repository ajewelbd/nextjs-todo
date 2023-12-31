import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";

const create = async (data: FormData) => {
    "use server";

    const title = data.get("title")?.valueOf();

    // console.log(data);

    if (typeof title !== "string") {
        throw new Error("Invalid Title!");
    }

    if (title === "") {
        throw new Error("Invalid Title!");
    }

    await prisma.todo.create({ data: { title, complete: false } });
    redirect("/");
};

export default function CreateTodo() {
    return (
        <div className="w-full max-w-xs">
            <form
                action={create}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        name="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        placeholder="Enter title here..."
                    />
                </div>

                <div className="flex items-center justify-start gap-5">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Add
                    </button>
                    <Link
                        href="/"
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Cancel
                    </Link>
                </div>
            </form>
        </div>
    );
}
