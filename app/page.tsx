import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/todoItem";
import { redirect } from "next/navigation";

export default async function Home() {
    const todos = await prisma.todo.findMany();

    const toggleComplete = async (id: string, complete: boolean) => {
        "use server";

        await prisma.todo.update({ where: { id }, data: { complete } });
    };

    const deleteToDo = async (id: string) => {
        "use server";

        await prisma.todo.delete({ where: { id } });

        redirect("/");
    };

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl">ToDos</h1>
                <Link
                    href="/new"
                    className="text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                >
                    New
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        {...todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                    />
                ))}
            </div>
        </>
    );
}
