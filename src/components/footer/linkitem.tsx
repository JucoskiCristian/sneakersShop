interface LinkProps {
  link: string
  label: string
}

export function LinkItem({ link, label }: LinkProps) {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose hover:text-violet-900"
      >
        {label}
      </a>
    </li>
  )
}
