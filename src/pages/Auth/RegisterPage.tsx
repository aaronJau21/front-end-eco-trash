import { useForm } from "react-hook-form"
import { Logo } from "../../components/Logo"
import { IInitialValuesRegister } from "./interfaces/InitialValue.interface"
import { useMutation } from "@tanstack/react-query"
import { AuthService } from "./services/auth.service"
import { useNavigate } from "react-router-dom"
import { ErrorMessage } from "./components/ErrorMessage"

export const RegisterPage = () => {

    const navigate = useNavigate()

    const initialValues: IInitialValuesRegister = {
        email: '',
        name: '',
        password: '',
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const { mutate } = useMutation({
        mutationFn: AuthService.register,
        onError: () => alert('error'),
        onSuccess: () => {
            navigate('/')
        }
    })

    const submit = (formData: IInitialValuesRegister) => mutate(formData)

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <Logo />
                <form onSubmit={handleSubmit(submit)}>

                    <div className="">
                        <label htmlFor="name" className="block text-white">Nombre Completo:</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full"
                            {...register('name', {
                                required: 'El name es obligatorio'
                            })}
                        />
                        {errors.name && (
                            <ErrorMessage>{errors.name.message}</ErrorMessage>
                        )}
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="block text-white">Correo electrónico:</label>
                        <input
                            type="text"
                            id="email"
                            className="w-full"
                            {...register('email', {
                                required: 'El email es obligatorio'
                            })}
                        />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </div>
                    <div className="my-5">
                        <label htmlFor="password" className="block text-white">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full"
                            {...register('password', {
                                required: 'El Password es obligatorio'
                            })}
                        />
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </div>

                    <div className="flex justify-center">
                        {/* <button type="submit" className="bg-white text-black font-semibold p-3 rounded-3xl">Iniciar sesión</button> */}
                        <input type="submit" className="bg-white text-black font-semibold p-3 rounded-3xl cursor-pointer" value="Iniciar sesión" />
                    </div>
                </form>
            </div>
        </div>
    )
}
