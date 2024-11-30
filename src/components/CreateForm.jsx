import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

const EyeColor = "eyeColor";
const DateOfBirth = "dateOfBirth";
const PersonName = "personName";
const Rating = "rating";

function CreateForm() {

  const [errors, setErrors] = useState([]);        // stan kominikatów błędów
  const [isSendig, setSending] = useState(false);  // stan sygnalizujący wysyłanie

  const onSubmitFunction = async (e) => {
    e.preventDefault(); // Blokada domyślnego działania formularza

    const data = new FormData(e.target); // Pobranie danych formularza
    const newErrors = []; // Tablica do zbierania błędów walidacji

    //imie
    const personName = data.get(PersonName);
    if (!/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/.test(personName)) {
        newErrors.push("Imię powinno zaczynać się dużą literą i zawierać tylko litery.");
    }

    //data urodzenia
    const dateOfBirth = data.get(DateOfBirth);
    const earliestDate = new Date("1920-01-01");
    if (new Date(dateOfBirth) < earliestDate) {
        newErrors.push("Data urodzenia nie może być starsza niż 1 stycznia 1920.");
    }

    //kolor oczu
    const eyeColor = data.get(EyeColor);
    if (!eyeColor) {
        newErrors.push("Proszę wybrać kolor oczu.");
    }

    //ocena
    const rating = data.get(Rating);
    if (!rating) {
        newErrors.push("Proszę zaznaczyć ocenę od 1 do 10.");
    }

    // Jeśli są błędy, aktualizujemy stan i przerywamy dalsze działanie
    if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
    }

    // Jeśli walidacja przeszła, kontynuujemy
    setErrors([]); // Reset błędów
    setSending(true); // Blokujemy przycisk wysyłania

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Symulacja wysyłania danych

    setSending(false); // Odblokowanie przycisku wysyłania

    // Resetowanie wartości formularza
    for (let key of data.keys()) {
        e.target[key].value = "";
    }

    console.log("Dane zostały pomyślnie wysłane:", Object.fromEntries(data));
    };

  return (
    <>
      <h1>Wprowadż osobę</h1>
      
      <div className="text-danger">
        {errors.map((e, i) => <p key={i}>{e}</p>)}
      </div>
      
      <Form className="text-primary" onSubmit={onSubmitFunction}>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor={PersonName}>Imię</Form.Label>
          <FormControl
            required
            id={PersonName}
            type={PersonName}
            name={PersonName}
            maxLength={20}
            className="text-lg"
            placeholder="Podaj imię"
          />
        <Form.Text className="text-muted">Imię powinno zaczynać się dużą literą i zawierać tylko litery.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={DateOfBirth}>Data urodzenia</Form.Label>
          <FormControl
            required
            id={DateOfBirth}
            type="date"
            name={DateOfBirth}
            placeholder="Podaj datę urodzenia"
          />
          <Form.Text className="text-muted">Data nie może być starsza niż 1920.01.01</Form.Text> 
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={EyeColor}>Kolor oczu</Form.Label>
            <Form.Select id={EyeColor} name={EyeColor}>
                <option value="">Wybierz...</option>
                <option value="blue">Niebieskie</option>
                <option value="green">Zielone</option>
                <option value="brown">Brązowe</option>
            </Form.Select>
            <Form.Text className="text-muted">Wybierz odpowiedni kolor oczu</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label htmlFor={Rating}>Ocena</Form.Label>
            <div>
                {[...Array(10)].map((_, i) => (
                <Form.Check
                    key={i + 1}
                    type="radio"
                    id={`rating-${i + 1}`}
                    name={Rating}
                    value={i + 1}
                    label={i + 1}
                />
                ))}
            </div>
            <Form.Text muted>Oceń osobę</Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button disabled={isSendig}  type="submit" variant="outline-primary" size="lg">
            Utwórz
          </Button>
        </div>
        
      </Form>
    </>
  );
}

export default CreateForm;