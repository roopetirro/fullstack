const Filter = ( {newFilter, onChange}) => {
    return (
        <p>
            filter shown with <input value = {newFilter} onChange = {onChange}/>
        </p>
    )
}
export default Filter