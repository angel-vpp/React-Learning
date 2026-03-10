import * as z from "zod";

interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    toDos: ToDo[],
    length: number,
    completedNumber: number,
    pending: number,
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

const ToDoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
})

const TaskStateSchema = z.object({
    toDos: z.array(ToDoSchema),
    length: z.number(),
    completedNumber: z.number(),
    pending: z.number(),
})

export const getTasksInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem('tasks-state')

    if (!localStorageState) {
        return {
            toDos: [],
            completedNumber: 0,
            pending: 0,
            length: 0,
        }
    }

    //Validar mediante Zod
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState))

    if (result.error) {
        console.log(result.error)
        return {
            toDos: [],
            completedNumber: 0,
            pending: 0,
            length: 0,
        }
    }

    // !Cuidado, el objeto puede haber sido manipulado si no se valida
    return JSON.parse(localStorageState)
}

export const taskReducer = (state: TaskState, action: TaskAction): TaskState => {

    switch (action.type) {

        case 'ADD_TODO': {
            const newToDo: ToDo = {
                id: Date.now(),
                text: action.payload.trim(),
                completed: false,
            }

            // !No se debe hacer:
            // state.toDos.push(newToDo)

            return {
                ...state,
                toDos: [...state.toDos, newToDo],
                length: state.toDos.length + 1,
                pending: state.pending + 1,
            }
        }

        case 'TOGGLE_TODO': {
            const updatedToDos = state.toDos.map((toDo) => {
                if (toDo.id === action.payload) return { ...toDo, completed: !toDo.completed }
                return toDo
            })
            // const completedToDos = updatedToDos.filter((toDo) => toDo.completed).length
            // const pendingToDos = updatedToDos.length - completedToDos

            return {
                ...state,
                toDos: updatedToDos,
                completedNumber: updatedToDos.filter((toDo) => toDo.completed).length,
                pending: updatedToDos.filter((toDo) => !toDo.completed).length,
            }
        }

        case 'DELETE_TODO': {
            const updatedToDos = state.toDos.filter((toDo) => toDo.id !== action.payload)
            // const completedToDos = updatedToDos.filter((toDo) => toDo.completed).length
            // const pendingToDos = updatedToDos.length - completedToDos

            return {
                ...state,
                toDos: updatedToDos,
                length: updatedToDos.length,
                completedNumber: updatedToDos.filter((toDo) => toDo.completed).length,
                pending: updatedToDos.filter((toDo) => !toDo.completed).length,
            }
        }

        default:
            return state
    }
}