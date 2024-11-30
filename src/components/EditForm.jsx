import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/module-data.js"; // Import lokalnych danych

const EyeColor = "eyeColor";
const DateOfBirth = "dateOfBirth";
const PersonName = "personName";
const Rating = "rating";

function EditForm() {
  const { id } = useParams(); // Pobranie ID z adresu URL
  const navigate = useNavigate(); // Do przekierowań po zapisaniu
  const [errors, setErrors] = useState([]); // Komunikaty błędów
  const [isSending, setSending] = useState(false); // Status wysyłania
 

  // Znajdowanie osoby na podstawie ID
    const person = data.find((p) => p.id === parseInt(id));
    

     if (!person) {
    return <p>Nie znaleziono osoby o ID: {id}</p>;
    }

    const onSubmitFunction = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const newErrors = [];

        // Walidacja pól
        const personName = formData.get(PersonName);
        if (!/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]+$/.test(personName)) {
        newErrors.push("Imię powinno zaczynać się dużą literą i zawierać tylko litery.");
        }

        const dateOfBirth = formData.get(DateOfBirth);
        const earliestDate = new Date("1920-01-01");
        if (new Date(dateOfBirth) < earliestDate) {
        newErrors.push("Data urodzenia nie może być starsza niż 1 stycznia 1920.");
        }

        const eyeColor = formData.get(EyeColor);
        if (!eyeColor) {
        newErrors.push("Proszę wybrać kolor oczu.");
        }

        const rating = formData.get(Rating);
        if (!rating) {
        newErrors.push("Proszę zaznaczyć ocenę od 1 do 10.");
        }

        if (newErrors.length > 0) {
        setErrors(newErrors);
        return;
        }

        setErrors([]);
        setSending(true);

        // Symulacja zapisu danych (przy aktualizacji danych lokalnych)
        try {
        const updatedPerson = {
            ...person,
            name: personName,
            birthDate: dateOfBirth,
            eyeColor,
            rating: parseInt(rating),
        };

        // Tu można wstawić logikę aktualizacji w stanie globalnym
        console.log("Zaktualizowane dane:", updatedPerson);
        alert("Dane zostały pomyślnie zaktualizowane.");
        navigate("/lab4"); // Przekierowanie po zapisaniu
        } catch (error) {
        setErrors([error.message]);
        } finally {
        setSending(false);
        }
    };


    function convertDate(dateStr) {
        const [day, month, year] = dateStr.split('.'); // Rozdzielamy datę na dzień, miesiąc i rok
        const formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`; // Formatowanie do YYYY-MM-DD
        return formattedDate;
      }


  return (
    <>
      <h1>Edytuj osobę</h1>

      <div className="text-danger">
        {errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>

      <Form className="text-primary" onSubmit={onSubmitFunction}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor={PersonName}>Imię</Form.Label>
          <FormControl
            required
            id={PersonName}
            type="text"
            name={PersonName}
            className="text-lg"
            placeholder="Podaj imię"
            defaultValue={person.name}
          />
          <Form.Text className="text-muted">Imię powinno zaczynać się dużą literą</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={DateOfBirth}>Data urodzenia</Form.Label>
          <FormControl
            required
            id={DateOfBirth}
            type="date"
            name={DateOfBirth}
            placeholder="Podaj datę urodzenia"
            defaultValue={convertDate(person.birth)}
          />
          <Form.Text className="text-muted">Data nie może być starsza niż 1920.01.01</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor={EyeColor}>Kolor oczu</Form.Label>
          <Form.Select id={EyeColor} name={EyeColor} defaultValue={person.eyes}>
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
                defaultChecked={parseInt(person.rating) === i + 1}
              />
            ))}
          </div>
          <Form.Text muted>Oceń osobę</Form.Text>
        </Form.Group>

        <div className="d-grid">
          <Button disabled={isSending} type="submit" variant="outline-primary" size="lg">
            Zapisz
          </Button>
        </div>
      </Form>
    </>
  );
}

export default EditForm;