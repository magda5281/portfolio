import type { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { cn } from '@/lib/utils'
import Counter from '@/components/counter'
import { GitHubLogoIcon } from '@radix-ui/react-icons'

interface CodeProps extends React.HTMLProps<HTMLPreElement> {
  children: string
}
function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children as string)

  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}
// Generic wrapper you can style however you want
function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // example styles—tweak freely
        'my-6 rounded-lg border border-slate-50 p-4',
        className
      )}
      {...props}
    />
  )
}
const components = {
  code: Code,
  Section,
  Counter,
  GitHubLogoIcon
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps & { className: string }
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
