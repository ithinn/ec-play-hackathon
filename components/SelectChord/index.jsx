import { Select, SubmitBtn } from "../StyledComponents/Forms";
import { useForm } from "react-hook-form" 
import { Box } from "reflexbox/styled-components";
import { useRouter } from "next/router";


const SelectChord = () => {
   
    const router = useRouter();
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        const path = "/chords/" + data.chords
        router.push(path)
    }  

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
        <Select name="chords" ref={register}>
            <option value="">Akkord</option>
            <option value="chord-a">A-dur</option>
            <option value="chord-a">A-moll</option>
            <option value="chord-d">D-dur</option>
            <option value="chord-d">D-moll</option>
            <option value="chord-e">E-dur</option>
            <option value="chord-e">E-moll</option>
            <option value="chord-b">B-dur</option>
            <option value="chord-b">B-moll</option>
            <option value="chord-fiss">F#-dur</option>
            <option value="chord-fiss">F#-moll</option>
            <option value="chord-ciss">C#-dur</option>
            <option value="chord-ciss">C#-moll</option>
        </Select>

        <SubmitBtn type="submit">Bytt akkord</SubmitBtn>
        </Box>
        </form>
    )
}

export default SelectChord;