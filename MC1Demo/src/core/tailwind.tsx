import { StyleSheet } from "react-native"
import styles from "../assets/css/tailwind.css"

let styleSheet = StyleSheet.create(styles)

export default function tw(...args: any[]) {
  return args
    .filter(Boolean)
    .flatMap((classNames) =>
      classNames.split(" ").map((className: string) => styleSheet[className])
    )
}