const Modal = () => {
  return (
    <aside className="modal-container">
        <di className='modal'>
            <h4>do you want to remove all items from your shopping cart?</h4>
            <div className="btn-container">
                <button type="button" className="btn confirm-btn">confirm</button>
                <button type="button" className="btn clear-btn">cancel</button>
            </div>
        </di>
    </aside>
  )
}
export default Modal