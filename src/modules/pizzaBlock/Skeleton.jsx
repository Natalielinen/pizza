import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="126" cy="132" r="126"/>
        <rect x="0" y="274" rx="10" ry="12" width="263" height="16"/>
        <rect x="0" y="302" rx="10" ry="11" width="263" height="57"/>
        <rect x="0" y="377" rx="10" ry="11" width="100" height="40"/>
        <rect x="113" y="377" rx="10" ry="11" width="150" height="40"/>
    </ContentLoader>
)

export default Skeleton;

