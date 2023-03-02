FROM python:3.9-buster

WORKDIR /usr/src/app/backend/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV FLASK_APP app

RUN pip install --upgrade pip
COPY ./requirements.txt /usr/src/app/backend/requirements.txt
RUN pip install -r requirements.txt

COPY . /usr/src/app/backend/

CMD ["gunicorn", "app:app", "--bind", "0.0.0.0:8000"]
