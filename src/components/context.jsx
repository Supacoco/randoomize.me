import { h } from 'preact'

const Context = ({ sequence, viewBox, dotSize, dotColor, bgColor, width, height }) => (
    <div style={`background-color: ${bgColor}; width: ${width}px; height: ${height}px;`}>
        <svg viewBox={viewBox} width={width} height={height} fill={bgColor}>
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