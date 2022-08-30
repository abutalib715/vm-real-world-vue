<script setup>
    import axios from 'axios';
    import BaseInput from '../components/forms/BaseInput.vue';
    import BaseSelect from '../components/forms/BaseSelect.vue';
    import BaseCheckbox from '../components/forms/BaseCheckbox.vue';
    import BaseRadioGroup from '../components/forms/BaseRadioGroup.vue';

    const categories = [
        'sustainablity',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community',
    ]
    const event = {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
            catering: false,
            music: false
        }
    }
    const petOptions = [
            { label: 'Yes', value: 1},
            { label: 'No', value: 0}
        ]
        
    function submitForm() {
        axios.post(
            'https://my-json-server.typicode.com/abutalib715/my-json-server/events',
            event
            ).then( res => {
                console.log('Response',res)
            }).catch(error => {
                console.log('Response',error)
            })
    }
</script>
<template>
    <div>
        <form @submit.prevent="submitForm">
        <h1>Create an event</h1>
        <BaseSelect 
            :options="categories"
            v-model="event.category"
            label="Select a category"
        />
        
        <h3>Name & describe your event</h3>
        <BaseInput 
            v-model="event.title"
            label="Title"
            type="text"
        />
             
        <BaseInput 
            v-model="event.description"
            label="Description"
            type="text"
        />
             
        <h3>Where is your event?</h3>
        <BaseInput 
            v-model="event.location"
            label="Location"
            type="text"
        />
        
        <h3>Are pets allowed?</h3>
        <div>
            <BaseRadioGroup 
            :options="petOptions"
            name="pets"
            v-model="event.pets"
            
            />
        </div>

        <h3>Extras</h3>
        <div>
            <BaseCheckbox v-model="event.extras.catering"
            label="Catering"/>
        </div>
        <div>
            <BaseCheckbox v-model="event.extras.music"
            label="Live Music"/>
        </div>

        <button class="button -fill-gradiant" type="submit">Submit</button>
        </form>
    </div>
</template>