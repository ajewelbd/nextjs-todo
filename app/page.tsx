import Link from "next/link";
import { prisma } from "./db";
import TodoItem from "@/components/todoItem";

export default async function Home() {
    const todos = await prisma.todo.findMany();
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-2xl">ToDo's</h1>
                <Link
                    href="/new"
                    className="text-2xl border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
                >
                    New
                </Link>
            </div>
            <div className="flex flex-col gap-2">
                {todos.map((todo) => {
                    <TodoItem key={todo.id} />;
                })}
            </div>
        </>
    );
}
