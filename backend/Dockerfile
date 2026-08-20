FROM python:3.11-slim

WORKDIR /app/backend

COPY requirements.txt ./requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Render expects the app to bind to $PORT
CMD uvicorn main:app --host 0.0.0.0 --port $PORT