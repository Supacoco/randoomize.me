import { h } from 'preact'

const Context = ({ sequence, viewBox, dotSize, dotColor, backgroundColor, width }) => (
    <div style={`background-color: ${backgroundColor}; max-width: ${width}px;`}>
        <svg viewBox={viewBox}>
            {
                sequence.map(dot => (
                    <ellipse
                        cx={dot.x}
                        cy={dot.y}
                        rx={dotSize}
                        ry={dotSize}
                        fill={dotColor}
                    />
                ))
            }
        </svg>
    </div>
)

export default Context