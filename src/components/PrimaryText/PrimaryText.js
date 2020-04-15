import React, { PureComponent } from 'react'
import Typography from '@material-ui/core/Typography'

class PrimaryText extends PureComponent {
    render() {
        const { text } = this.props

        return (
            <Typography variant="subtitle1" gutterBottom>
                {text}
            </Typography>
        )
    }
}

export default PrimaryText
