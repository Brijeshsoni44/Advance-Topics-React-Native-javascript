// // simple react native component testing
// //button testing

// // const Button = ({handlePress,title}) => (
// //     <TouchableOpacity onPres={handlePress}>
// //         {title}

// //     </TouchableOpacity>

// // )



// import Button  from './Button'

// test('Buttons render correctly and handle press', () => {
//     const mockOnPress = jest.fn();
//     const {getByText} = render(<Button title="click me" onPress={mockOnPress}/>)
//     fireEvent.prsee(getByText('Click me'));
//     expect(mockOnPress).toHaveBeenCalled()

// });