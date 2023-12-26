import { Card, Input, Select } from "@/components/atoms"
import { FC } from "react"

const FormCourse: FC = () => {
  return (
    <Card>
      <Select options={[
        {
          key: "Google Android",
          value: "google-android"
        },
        {
          key: "Google Cloud",
          value: "google-cloud"
        },
        {
          key: "Apple",
          value: "apple"
        },
      ]} />
    </Card>
  )
}

export default FormCourse