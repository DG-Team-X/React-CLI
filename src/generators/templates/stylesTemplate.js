import { files } from "../../utils"

export default (name) => {
return `
@import '../../styles/variables.scss';

.${files.lcFirst(name)} {}
`
}