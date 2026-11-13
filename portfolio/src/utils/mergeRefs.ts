import { type Ref, type RefCallback, type RefObject } from "react"

export default function mergeRefs<T>(
  ...refs: Array<Ref<T> | undefined>
): RefCallback<T> {
  return (node: T | null) => {
    refs.forEach(ref => {
      if (!ref) return

      if (typeof ref === "function") {
        ref(node)
      } else {
        ;(ref as RefObject<T | null>).current = node
      }
    })
  }
}
