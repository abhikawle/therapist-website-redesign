interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  lg?: boolean;
}

export function Container({ children, className = '', lg = false }: ContainerProps) {
  return (
    <div className={`${lg ? 'container-lg-max' : 'container-max'} ${className}`}>
      {children}
    </div>
  );
}
