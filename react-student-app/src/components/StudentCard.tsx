import { useContext, useState, useEffect } from 'react';
import { updateStudent, updateStudentRatingList } from '../context/actions';
import { GlobalContext } from '../context/GlobalState';
import { StudentRating } from '../context/types';
import styles from './StudentCard.module.css';

const StudentCard = () => {

    // Context
    const {
        state: { student, studentRatingList }, dispatch
    } = useContext(GlobalContext);

    // State
    const [displayCardState, setDisplayCardState] = useState(true);
    const [ratingState, setRatingState] = useState({ id: student.sourceID, stars: 0 });

    // Run on mount
    useEffect(() => {
        // Check if student.sourceID is present in studentRatingList
        const matchingStudent: StudentRating[] = studentRatingList
            .filter(element => element.sourceID === student.sourceID);

        // If student is not in studentRatingList, add student to studentRatingList
        if (matchingStudent.length === 0) {
            setRatingState({ id: ratingState.id, stars: 0 });

            const newRating: StudentRating = { sourceID: ratingState.id, starRating: ratingState.stars };
            
            let newStudentRatingList = studentRatingList;
            newStudentRatingList.push(newRating);
            dispatch(updateStudentRatingList(newStudentRatingList));
        }
        else {
            setRatingState({ id: ratingState.id, stars: matchingStudent[0].starRating});
        }
    }, []);

    // Close student card and return to list view
    const handleBackButtonClick = () => {
        setDisplayCardState(false);
    };

    // Update student.displayStudent in global state
    useEffect(() => {
        let newStudent = student;
        newStudent.displayStudent = displayCardState;
        dispatch(updateStudent(newStudent));
    }, [dispatch, displayCardState, student]);


    // Update studentRatingList on star rating change
    useEffect(() => {
        let updatedList: StudentRating[] = studentRatingList
            .map(x => (x.sourceID === ratingState.id ? { ...x, starRating: ratingState.stars } : x));
        dispatch(updateStudentRatingList(updatedList));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ratingState.stars]);
    

    // Star button handlers
    const increaseStars = () => {
        let stars: number = ratingState.stars;
        if (stars < 5) {
            stars++;
            setRatingState({ id: ratingState.id, stars: stars });
        }
    };

    const decreaseStars = () => {
        let stars: number = ratingState.stars;
        if (stars > 0) {
            stars--;
            setRatingState({ id: ratingState.id, stars: stars });
        }
    };


    // JSX
    return (
        <div className={styles.container}>
            <div className={styles.backContainer}>
                <h1 onClick={handleBackButtonClick}>X</h1>
            </div>
            <div className={styles.studentContainer}>
                <div className={styles.section}>
                    <h3>Student Details</h3>
                    <h4>{`Name: ${student.firstName} ${student.lastName}`}</h4>
                    <h4>{`Year Code: ${student.yearCode}`}</h4>
                    <h4>{`Gender: ${student.gender}`}</h4>
                    <h4>{`DOB: ${student.dob.split(" ")[0]}`}</h4>
                    <h4>{`Ethnicity Code: ${student.ethnicityCode}`}</h4>
                </div>
                <div className={styles.section}>
                    <h3>Address</h3>
                    <h4>{`Line 1: ${student.addressLine1}`}</h4>
                    <h4>{`Line 2: ${student.addressLine2}`}</h4>
                    <h4>{`Town: ${student.townCity}`}</h4>
                    <h4>{`Postcode: ${student.postcode}`}</h4>
                </div>
                <div className={styles.section}>
                    <h3>Emergency Contacts</h3>
                    <h4>{`Name: ${student.contacts[0].name}`}</h4>
                    <h4>{`Relationship: ${student.contacts[0].relationship}`}</h4>
                    <br />
                    <h4>{`Name: ${student.contacts[1].name}`}</h4>
                    <h4>{`Relationship: ${student.contacts[1].relationship}`}</h4>
                </div>
                <div className={styles.section}>
                    <h3>Star Rating</h3>
                    <h4>{`Stars: ${ratingState.stars}`}</h4>
                    <button onClick={increaseStars}>Increase</button>
                    <button onClick={decreaseStars}>Decrease</button>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;
