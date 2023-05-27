import { useForm } from 'react-hook-form';


function NewMovie() {
  const { register, handleSubmit, formState: { errors } }
    = useForm({
      defaultValues: {
      }
    });

  console.log(errors);
  return (
    <div className='container flex'>
      <div className="new-form">

        <form onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <h2> ADD Movie </h2>
          <input
            {...register('Movie', { required: 'Field is required.', parttern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1' } })}
            placeholder='Movie'
          />
          <p>{errors.Movie?.message}</p>
          <input
            {...register('year', { required: 'Field is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1' } })}
            placeholder='year'
          />
          <p>{errors.year?.message}</p>
          <input className='Input'
            {...register('popularity', { required: 'Field is required.', pattern: /^[A-Za-z]+$/i, minLength: { value: 1, message: 'Min length is 1' } })}
            placeholder='Popularity'
          />
          <p>{errors.Popularity?.message}</p>


          <button to="/newMovie" className="movie-button">Submit</button>
        </form>
      </div>
    </div>

  );
}

export default NewMovie;