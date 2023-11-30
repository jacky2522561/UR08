import { useSelector } from 'react-redux';
const CarValue = () => {
    const totalCost = useSelector(({ cars: { searchName, data } }) => {
        const filterCar = data.filter((car) => car.name.toLowerCase().includes(searchName.toLowerCase()));
        let sum = 0;
        for (let i = 0; i < filterCar.length; i++) {
            sum += filterCar[i].cost
        }
        return sum;
    })
    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue;