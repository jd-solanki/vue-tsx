import { defineComponent } from 'vue';

export const CustomInput = defineComponent({
    name: 'CustomInput',
    props: {
        modelValue: String,
    },
    setup(props, { slots, emit, attrs }) {
        console.log('attrs', attrs)
        const handleChange = (e: Event) => {
            const val = (e.target as HTMLInputElement).value
            // console.log('val :>> ', val);
            emit('input', val)
            emit('update:modelValue', val)
        }

        return () => <input {...attrs} type="text" value={props.modelValue} onInput={handleChange}></input>
    }
})

export type CustomInput = InstanceType<typeof CustomInput>