export default ({ children }: { children: React.ReactNode }) => {
    return <div>
    <div className="border-b text-center">
        20% off for the next 3 days.
    </div>
    <div>
        {children}
    </div>
    </div>
}