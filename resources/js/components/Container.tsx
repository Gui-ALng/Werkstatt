export function Container({ children, className = '', ...props }: any) {
    return (
        <div className={['mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className].join(' ')} {...props}>
            {children}
        </div>
    )
}

export default Container;
