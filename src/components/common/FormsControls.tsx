import { Checkbox, Input } from 'antd'
import Form from 'antd/lib/form/Form'
import TextArea from 'antd/lib/input/TextArea'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { FieldValidatorType } from '../utils/validator/validator'
import s from './FormsControls.module.css'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({
    meta: { touched, error },
    children,
}) => {
    const hasError = touched && error
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div>
                <div>{children}</div>
                {hasError && <Text type="danger">{error} </Text>}
            </div>
        </div>
    )
}

export const RFTextarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <TextArea {...input} {...restProps} />
        </FormControl>
    )
}

export const RFInput = (props: any) => {
    const { input, meta, ...restProps } = props
    return (
        <FormControl {...props}>
            <Input {...input} {...restProps} />
        </FormControl>
    )
}

export const RFCheckbox = (props: any) => {
    const { input, meta, ...restProps } = props
    return (
        <Form {...props}>
            <Checkbox {...input} {...restProps} />
        </Form>
    )
}

export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props?: {},
    text?: string
) {
    return (
        <div>
            {!!text ? <Text>{text}</Text> : ''}
            <Field
                placeholder={placeholder}
                name={name}
                component={component}
                validate={validators}
                {...props}
            />
        </div>
    )
}

export type GetStringKeys<T> = Extract<keyof T, string>
