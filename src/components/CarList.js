import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../store';
const CarList = () => {
    const dispatch = useDispatch();
    const cars = useSelector(({ cars: { searchName, data } }) => {
        const filterCar = data.filter((car) => {
            return (
                car.name.toLowerCase().includes(searchName.toLowerCase())
            )
        });
        return filterCar;
    }, shallowEqual);
    const name = useSelector(({form})=>{
        return form.name;
    })
    const handleCarDelete = (Car) => {
        dispatch(removeCar(Car.id));
    }

    const renderedCars = cars.map((car) => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className='button is-danger'
                    onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })
    return (
        <div className='car-list'>
            {renderedCars}
        </div>
    )
}

export default CarList;