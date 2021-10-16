import rewire from "rewire"
const get_page_context = rewire("./get-page-context")
const createPageContext = get_page_context.__get__("createPageContext")
const getPageContext = get_page_context.__get__("getPageContext")
// @ponicode
describe("createPageContext", () => {
    test("0", () => {
        let callFunction: any = () => {
            createPageContext()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getPageContext", () => {
    test("0", () => {
        let callFunction: any = () => {
            getPageContext()
        }
    
        expect(callFunction).not.toThrow()
    })
})
