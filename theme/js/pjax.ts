export const pjaxinit = async (): Promise<void> => {
    const { Pjax } = await import('pjax-api')
    new Pjax({
        areas: [
            '#main, #breadcrumb, #mainnav, #sidebar, #pre_content',
            '#grid',
            'body'
        ],
        update: {
            head: 'meta',
            css: false
        }
    })
    return
}