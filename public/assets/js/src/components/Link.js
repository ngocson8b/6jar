/**
 * Created by ngocsontran on 3/24/17.
 */


import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a href="#"
           onClick={e => {
               e.preventDefault()
               onClick()
           }}
        >
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link

//preventDefault dùng để chặn hành động mặc định của sự kiện,
// ví dụ như khi ta bấm vào thẻ a thì trình duyệt sẽ chuyển sang trang mới
// hoặc gửi nội dung của input khi form xảy ra sự kiện submit
// thẻ <a> là thẻ tạo đường link đến trang web out