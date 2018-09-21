import web
urls = (
    '/form', 'form'
)
app = web.application(urls, globals())

class form:
    def GET(self):
        return open(r'form_1.html', 'r').read()

    def POST(self):
        i = web.input()
        print(i)
        return open(r'submitted.html', 'r').read()

if __name__ == "__main__":
    app.run()