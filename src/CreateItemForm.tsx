import {type ChangeEvent, type KeyboardEvent, useState} from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox'
import TextField from '@mui/material/TextField';
import {IconButton} from "@mui/material";


type Props = {
    onCreateItem: (title: string) => void
}

export const CreateItemForm = ({onCreateItem}: Props) => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const createItemHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== '') {
            onCreateItem(trimmedTitle)
            setTitle('')
        } else {
            setError('Title is required')
        }
    }

    const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
        setError(null)
    }

    const createItemOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createItemHandler()
        }
    }

    return (
        <div>
            <TextField label={'Enter a title'}
                       variant={'outlined'}
                       error={!!error}
                       helperText={error}
                       value={title}
                       size={'small'}
                       onChange={changeTitleHandler}
                       onKeyDown={createItemOnEnterHandler}/>
            <IconButton onClick={createItemHandler} color={'primary'}>
                <AddBoxIcon></AddBoxIcon>
            </IconButton>

        </div>
    )
}