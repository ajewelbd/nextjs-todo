"use client";

type ToDoProps = {
    id: string;
    title: string;
    complete: boolean;
    toggleComplete: (id: string, complete: boolean) => void;
    deleteToDo: (id: string) => void;
};

export default function TodoItem({
    id,
    title,
    complete,
    toggleComplete,
    deleteToDo,
}: ToDoProps) {
    return (
        <div className="flex gap-3">
            <input
                type="checkbox"
                id={id}
                defaultChecked={complete}
                onChange={(e) => toggleComplete(id, e.target.checked)}
                className="cursor-pointer peer"
            />
            <label
                htmlFor={id}
                className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
            >
                {title}
            </label>
            <button
                type="button"
                className="rounded px-1 bg-red-500"
                onClick={() => deleteToDo(id)}
            >
                Delete
            </button>
        </div>
    );
}
