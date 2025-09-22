## Pruthviraj Mundargi pm935@drexel.edu
## Saivinay Rayala sr3674@drexel.edu
## CS530: DUI


# run.py

from app import create_app

app = create_app()

if __name__ == '__main__':
    print("log:hello app started")
    app.run(host='localhost', port=8080, debug=True)

