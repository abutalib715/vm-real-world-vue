<script setup>
import BaseInput from '../components/forms/BaseInput.vue';
import BaseSelect from '../components/forms/BaseSelect.vue';
import BaseCheckbox from '../components/forms/BaseCheckbox.vue';
import BaseRadio from '../components/forms/BaseRadio.vue';

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
</script>
<template>
    <div>
        <form>
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
            <BaseRadio v-model="event.pets"
             label="Yes" :value="1" name="pets"
            />
        </div>
        <div>
            <BaseRadio v-model="event.pets"
             label="No" :value="0" name="pets"
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